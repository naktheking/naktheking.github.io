from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    result = None
    if request.method == 'POST':
        start_time = request.form['start_time']
        end_time = request.form['end_time']
        
        t1 = datetime.strptime(start_time, "%H:%M")
        t2 = datetime.strptime(end_time, "%H:%M")
        delta = t2 - t1
        result = delta.total_seconds()
        
    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
