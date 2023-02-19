import sqlite3 
from sqlite3 import Error 
from flask import Flask, render_template,request




app = Flask(__name__)

#@app.route('/list')
#db 파일 연결
#conn=sqlite3.connect(".\test.db",isolation_level=None)
#cursor=conn.cursor() #커서 연결


@app.route('/') #naver.com 파일이름을 명시X 
def hello_world():
	return render_template('index.html')

@app.route('/user_form')
def new_user():
	return render_template('user.html')

@app.route('/user_info', methods = ['POST', 'GET'])
def user_info():
	if request.method=='POST': #사용자가 web에서 보내준 정보들이 들어있는 객체
	
		try:
			user_name = request.form['name']
			user_birth = request.form['Birth']

			with sqlite3.connect("C:\prj_Birthday\mkCake\\test.db") as con:
				print(user_name)
				print(user_birth)
				cur = con.cursor()
				cur.execute("INSERT INTO user VALUES (?,?,null)" ,(user_name,user_birth) )
				msg = "Success"

		except Error:
			print(Error)
			msg = "error"

		finally:
			return "결과는 "+msg 
			
		

@app.route('/CreateCake') #URL에서 어떤 주소로 받을지 
def create_cake():
	return render_template('CreateCake.html') #이 파일을 랜더링

@app.route('/WriteMsg') #msg db랑 연동
def write_msg():
	return render_template('WriteMsg.html') 

@app.route('/ReadMsg') 
def read_msg():
	return render_template('ReadMsg.html') 



if __name__ == '__main__':
	app.debug=True
	app.run(host='0.0.0.0')

