import os
from flask import Flask, render_template, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)  # Fixed: __name__ instead of name

# Configuration
app.config['SECRET_KEY'] = os.urandom(32)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587

app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USER')      # e.g., your_email@gmail.com
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASS')      # App Password (NOT regular password)
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USER')  # Optional but recommended

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()

    if not data or 'name' not in data or 'email' not in data or 'message' not in data:
        return jsonify(success=False, error="Missing required fields"), 400

    try:
        msg = Message(
            subject=f"Portfolio Contact from {data['name']}",
            recipients=['vikasprajapat34118@gmail.com'],  # Your receiving email
            reply_to=data['email']  # Good UX: allows you to reply directly
        )
        msg.body = f"""
New message from your portfolio:

Name: {data['name']}
Email: {data['email']}
Phone: {data.get('phone', 'Not provided')}

Message:
{data['message']}
        """.strip()

        mail.send(msg)
        return jsonify(success=True, message="Email sent successfully!")

    except Exception as e:
        print("Email sending failed:", e)  # Log error in console
        return jsonify(success=False, error="Failed to send email. Please try again later."), 500

if __name__ == '__main__':  # Fixed: __name__ with underscores
    app.run(debug=True)