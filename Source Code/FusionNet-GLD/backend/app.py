from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# ✅ Load Model
model = tf.keras.models.load_model("./model/dual_stream_model.h5")

# ✅ Class Labels (change if your class names differ)
CLASS_NAMES = ['Black Rot', 'Esca', 'leaf blight', 'Healthy']

def preprocess_image(image_bytes):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize((224, 224))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["image"]
    img_bytes = file.read()
    img_array = preprocess_image(img_bytes)

    predictions = model.predict(img_array)
    class_index = np.argmax(predictions)
    confidence = float(np.max(predictions) * 100)
    disease = CLASS_NAMES[class_index]

    response = {
        "disease": disease,
        "confidence": round(confidence, 2),
        "severity": "Moderate" if confidence > 70 else "Low",
        "recommendations": [
            "Apply suitable fungicide",
            "Ensure proper air circulation",
            "Remove infected leaves",
            "Monitor regularly"
        ]
    }

    return jsonify(response)

@app.route("/")
def home():
    return "✅ Flask API is running"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
