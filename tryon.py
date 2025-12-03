# # from flask import Flask, request, jsonify, send_file
# # import os
# # from werkzeug.utils import secure_filename
# # import uuid
# # import torch
# # from viton_model import VirtualTryOn  # assume imported from VITON repo

# # app = Flask(__name__)
# # UPLOAD_FOLDER = "uploads"
# # RESULT_FOLDER = "results"
# # os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# # os.makedirs(RESULT_FOLDER, exist_ok=True)

# # # Load pre-trained try-on model
# # tryon_model = VirtualTryOn("checkpoints/viton.pth")

# # @app.route("/tryon", methods=["POST"])
# # def try_on():
# #     if "person" not in request.files or "clothes" not in request.files:
# #         return jsonify({"error": "Upload both person and clothes image"}), 400
    
# #     person_file = request.files["person"]
# #     clothes_file = request.files["clothes"]

# #     person_path = os.path.join(UPLOAD_FOLDER, secure_filename(person_file.filename))
# #     clothes_path = os.path.join(UPLOAD_FOLDER, secure_filename(clothes_file.filename))

# #     person_file.save(person_path)
# #     clothes_file.save(clothes_path)

# #     # Generate try-on result
# #     output_filename = f"{uuid.uuid4()}.png"
# #     output_path = os.path.join(RESULT_FOLDER, output_filename)
    
# #     tryon_model.generate(person_path, clothes_path, output_path)

# #     return send_file(output_path, mimetype="image/png")

# # if __name__ == "__main__":
# #     app.run(debug=True)
# from flask import Flask, request, jsonify, send_file
# import os
# from werkzeug.utils import secure_filename
# import uuid
# from PIL import Image

# app = Flask(__name__)
# UPLOAD_FOLDER = "uploads"
# RESULT_FOLDER = "results"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# os.makedirs(RESULT_FOLDER, exist_ok=True)

# @app.route("/tryon", methods=["POST"])
# def try_on():
#     if "person" not in request.files or "clothes" not in request.files:
#         return jsonify({"error": "Upload both person and clothes image"}), 400
    
#     person_file = request.files["person"]
#     clothes_file = request.files["clothes"]

#     # Save inputs
#     person_path = os.path.join(UPLOAD_FOLDER, secure_filename(person_file.filename))
#     clothes_path = os.path.join(UPLOAD_FOLDER, secure_filename(clothes_file.filename))
#     person_file.save(person_path)
#     clothes_file.save(clothes_path)

#     # Open images with Pillow
#     person_img = Image.open(person_path).convert("RGBA")
#     clothes_img = Image.open(clothes_path).convert("RGBA")

#     # Resize clothes to fit person width
#     clothes_img = clothes_img.resize((person_img.width, int(person_img.height * 0.5)))

#     # Paste clothes onto person (simple overlay at top-half)
#     result = person_img.copy()
#     result.paste(clothes_img, (0, int(person_img.height * 0.25)), clothes_img)

#     # Save result
#     output_filename = f"{uuid.uuid4()}.png"
#     output_path = os.path.join(RESULT_FOLDER, output_filename)
#     result.save(output_path, "PNG")

#     return send_file(output_path, mimetype="image/png")

# if __name__ == "__main__":
#     app.run(debug=True)
# @app.route("/")
# def index():
#     return send_file("tryon.html")
from flask import Flask, request, jsonify, send_file, url_for
import os
from werkzeug.utils import secure_filename
import uuid
from PIL import Image

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
RESULT_FOLDER = "results"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RESULT_FOLDER, exist_ok=True)

@app.route("/")
def index():
    return send_file("tryon.html")

@app.route("/tryon", methods=["POST"])
def try_on():
    if "person" not in request.files or "clothes" not in request.files:
        return jsonify({"error": "Upload both person and clothes image"}), 400
    
    person_file = request.files["person"]
    clothes_file = request.files["clothes"]

    # Unique filenames
    person_filename = f"{uuid.uuid4()}_{secure_filename(person_file.filename)}"
    clothes_filename = f"{uuid.uuid4()}_{secure_filename(clothes_file.filename)}"
    person_path = os.path.join(UPLOAD_FOLDER, person_filename)
    clothes_path = os.path.join(UPLOAD_FOLDER, clothes_filename)

    # Save inputs
    person_file.save(person_path)
    clothes_file.save(clothes_path)

    # Open images with Pillow
    person_img = Image.open(person_path).convert("RGBA")
    clothes_img = Image.open(clothes_path).convert("RGBA")

    # Resize clothes (fit ~80% width of person, half height)
    clothes_img = clothes_img.resize(
        (int(person_img.width * 0.8), int(person_img.height * 0.5))
    )

    # Position clothes (centered horizontally, 30% down)
    x = (person_img.width - clothes_img.width) // 2
    y = int(person_img.height * 0.3)

    # Overlay
    result = person_img.copy()
    result.paste(clothes_img, (x, y), clothes_img)

    # Save result
    output_filename = f"{uuid.uuid4()}.png"
    output_path = os.path.join(RESULT_FOLDER, output_filename)
    result.save(output_path, "PNG")

    return send_file(output_path, mimetype="image/png")

@app.route("/results/<filename>")
def get_result(filename):
    return send_file(os.path.join(RESULT_FOLDER, filename))

if __name__ == "__main__":
    app.run(debug=True)
