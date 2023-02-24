import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Createcake from './Createcake';
import NotFound from './NotFound';
import ReadMsg from './ReadMsg';
import WriteMsg from './WriteMsg';
import styles from "./App.module.css";



const App = () => {
	return (

				<div className='App' >
			<BrowserRouter>
				<Header />
				<Routes >
					backgroundColor='pink'
					<Route path="/" element={<Main />}></Route>
					<Route path="/Createcake" element={<Createcake/>}></Route>
					<Route path="/ReadMsg" element={<ReadMsg/>}></Route>
					<Route path="/WriteMsg" element={<WriteMsg/>}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>	
			</BrowserRouter>
				</div>
	);
};

export default App;