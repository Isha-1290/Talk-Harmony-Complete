import random
import string

ALLOWED_EXTENSIONS = {'png', 'jpg', "jpeg"}

def generate_random_id():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS