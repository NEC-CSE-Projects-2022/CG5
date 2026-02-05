
## CG5 – FusionNet-GLD: A Dual-Backbone CNN Model Combining
Xception and Inception for Grape Leaf Disease Recognition


## Team Info
- 22471A05K0 — Syed Shafia Zainab 

- 22471A05J7 — Soudagar Min Haz

- 22471A05E9 — Chatti Navya



## Abstract
Grapevine leaf diseases like black rot, leaf blight,
and esca directly impact vineyard productivity through yield
decline and fruit quality deterioration. Early and precise detection will go a long way in efficient management, but conventional manual inspections are time-consuming, labor-intensive,and tend to be unreliable for commercial vineyards.To solvethese issues, we introduce FusionNet-GLD, a double-backbone convolutional neural network for the classification of grapevine leaf diseases. It combines Xception and InceptionV3 models to take their complementary advantages. Xception extracts fine-grained patterns through depthwise separable convolutions,
whereas InceptionV3 captures features across different scales
via small and large convolutional filters. This synergy allows
FusionNet-GLD to well capture the intricate visual patterns
of affected leaves.The predictive framework was also drilled
and assessed on an augmented PlantVillage resource in real
vineyard-simulating conditions. The experimental results indicate
that FusionNet-GLD beats five baseline models—Random Forest,
MobileNetV2, EfficientNetB0, InceptionV3, and Xception—with
99.63% accuracy, 99.45% precision, 99.42% recall, 99.43% F1-
score, and 0.99 AUC.These results prove FusionNet-GLD to
be efficient, accurate, and scalable. Its lightweight architecture
makes it deployable on handheld devices or drones, which will
be useful in monitoring vineyards in real time and facilitating
precision agriculture by minimizing the use of manual labor and
maximizing early disease detection.


## Paper Reference (Inspiration)
👉 Paper Title GrapeLeafNet: A Dual-Track
 Feature Fusion Network 
With Inception-ResNet 
and Shuffle-Transformer 
 for Accurate Grape 
Leaf Disease Identification.
Author Names R. Karthik; R. Menaka; S. Ompirakash; P. Bala Murugan; M. Meenakashi; Sindhia Lingaswamy
Paper URL here - https://ieeexplore.ieee.org/document/10418225
Original conference/IEEE paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper
FusionNet-GLD improves upon existing fusion-based models by combining Xception and InceptionV3 to exploit complementary fine-grained and multi-scale features. The optimized feature-level fusion after global average pooling reduces redundancy and overfitting while improving accuracy and convergence. Compared to single-backbone and earlier fusion approaches, the model achieves higher classification performance with lower computational overhead and better robustness to real-world grape leaf variations.

---

## About the Project
What the project does

This project automatically detects and classifies grape leaf diseases from leaf images using a deep learning fusion model (FusionNet-GLD).

Why it is useful

Early and accurate disease detection helps farmers take timely action, reduce crop loss, minimize pesticide misuse, and improve grape yield and quality.

General project workflow

Input → Processing → Model → Output

Input: Grape leaf images

Processing: Image resizing, normalization, and data augmentation

Model: FusionNet-GLD (Xception + InceptionV3 feature fusion)

Output: Predicted disease class (healthy or specific grape leaf disease)

---

## Dataset Used
👉 Kaggle plant village Dataset

**Dataset Details:**
The dataset consists of grape leaf images representing both healthy leaves and multiple grape leaf disease classes.

Images were collected from publicly available plant disease datasets and curated to ensure class balance and quality.

Each image is labeled according to the corresponding disease category.

Prior to training, images are resized, normalized, and augmented (rotation, flipping, zooming) to improve model generalization.

---

## Dependencies Used
Python – core programming language

TensorFlow & Keras – deep learning model development

NumPy – numerical computations

Pandas – dataset handling and preprocessing

OpenCV – image loading and processing

Matplotlib / Seaborn – visualization of results and training metrics

Scikit-learn – performance evaluation and baseline models

---

## EDA & Preprocessing
Performed exploratory data analysis (EDA) to understand class distribution and image characteristics.

Identified and handled class imbalance to avoid biased learning.

Resized all images to a fixed input size suitable for the model.

Applied normalization to scale pixel values for stable training.

Used data augmentation techniques such as rotation, flipping, zooming, and shifting to increase dataset diversity.

Split the dataset into training, validation, and testing sets for fair evaluation.

---

## Model Training Info
Used transfer learning with pretrained Xception and InceptionV3 backbones.

Initialized models with ImageNet weights to improve feature learning.

Early layers were frozen initially and later fine-tuned for better performance.

Trained using categorical cross-entropy loss and the Adam optimizer.

Applied dropout regularization to reduce overfitting.

---

## Model Testing / Evaluation
Evaluated the trained model on a separate test dataset unseen during training.

Measured performance using accuracy, precision, recall, and F1-score.

Analyzed results with a confusion matrix to understand class-wise predictions.

Compared FusionNet-GLD performance with baseline and single-backbone models.

Confirmed improved generalization and robustness on test data.

---

## Results
The proposed FusionNet-GLD achieved higher classification accuracy than single-backbone models.

It showed improved precision, recall, and F1-score across all grape leaf disease classes.

Validation and test results indicate reduced overfitting and stable learning behavior.

Overall, the fusion approach demonstrated better robustness and generalization on unseen data.

---

## Limitations & Future Work
The model is trained on limited public datasets, which may not fully represent all real-field conditions.

Performance can be affected by extreme lighting, occlusion, or low-quality images.

Currently, the system focuses only on grape leaf diseases and does not support other crops.

Expand the dataset with real-time field images for better generalization.

Extend the model to support multiple crops and diseases.

Optimize the model for mobile and edge deployment.

---

