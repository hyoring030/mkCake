from flask import Flask, render_template


app = Flask(__name__)



@app.route('/') #naver.com 파일이름을 명시X 
def hello_world():

	return render_template('index.html')

@app.route('/CreateCake') #URL에서 어떤 주소로 받을지 
def create_cake():
	return render_template('CreateCake.html') #이 파일을 랜더링

@app.route('/WriteMsg')
def write_msg():
	return render_template('WriteMsg.html') 

@app.route('/ReadMsg') 
def read_msg():
	return render_template('ReadMsg.html') 



if __name__ == '__main__':
	app.debug=True
	app.run(host='0.0.0.0')