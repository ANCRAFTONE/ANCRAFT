

// import './ANCRAFTONE.css';
// import ANCRAFTONE from './ANCRAFTONE';
import * as React from 'react';

export default function MainSection({}) {
	return (
		<section class="main NETANCRAFTONE" id="ANCRAFTONE">
          {/* <!--- 頂部導覽區 ---> */}
          <section class="top" id="ANCRAFTONE">
            <div class="title" onclick="sidebar()">
              <i class='bx bxs-planet'></i>
              <a class="titletext" id="ANCRAFTONE">ANCRAFT</a>
            </div>
            <div class="searchbar">
              <label><input autofocus type="text" ondblclick="sidebar()" placeholder="輸入搜尋關鍵字" id="s" value="" onkeypress="document.title = $('#s').val() + '-搜尋'; " /></label>
              {/* <!-- <button type="button" onclick="get()//啟動" class="button">開始查詢</button> --> */}
              <a class="get" onclick="get()" ondblclick="sidebar()">
                <i class='bx bx-search-alt'></i>
              </a>
            </div>
            <div class="user">
              <p>hi,</p>
              <a id="username" id="ANCRAFTONE"  ondblclick="sidebar()">ANCRAFT</a>
            </div>
            {/* <!--- 頂部導覽區 ---> */}
          </section>
  
          {/* <!--- 標題區塊 ---> */}
          <section class="path">
            <div class="toolbar">
              <div ondblclick="">
                <h1>Admin/儀錶板</h1>
              </div>
              <div class="savebutton">
                <button ondblclick="" onclick="window.print()">print</button>
                <button ondblclick="" onclick="">export</button>
                <button ondblclick="" onclick="">update</button>
                <button ondblclick="" onclick="">upload</button>
              </div>
            </div>
          </section>
  
          {/* <!--- 資料區塊 ---> */}
  
          <section class="plot" id="ANCRAFTONE"> 
            {/* <!--- 統計數據區塊 ---> */}
            <div class="l1">
              <div ondblclick="" class="stats block">
                <div class="data">
                  <div>
                    <h5>已找到的資料</h5>
                    <h3 class="1" id="data_1">000</h3>
                  </div>
                  <div>
                    <i class='bx bx-data'></i>
                  </div>
                </div>
                <div class="footer"   style={{'background-color': '#00A163'}}>
                  <a href="">查看更多內容
                    <i class='bx bx-right-arrow-alt' ></i>
                  </a>
                </div>
              </div>
              <div ondblclick="" class="stats block">
                <div class="data">
                  <div>
                    <h5>項目最高標記</h5>
                    <h3 class="1" id="data_2">000</h3>
                  </div>
                  <div>
                    <i class='bx bx-purchase-tag-alt'></i>
                  </div>
                </div>
                <div class="footer"   style={{'background-color': 'rgb(255, 121, 31)'}}>
                  <a href="">查看更多內容
                    <i class='bx bx-right-arrow-alt' ></i>
                  </a>
                </div>
              </div>
              <div ondblclick="" class="stats block">
                <div class="data">
                  <div>
                    <h5>項目最高電量</h5>
                    <h3 class="1" id="data_3">000</h3>
                  </div>
                  <div>
                    <i class='bx bx-bar-chart'></i>
                  </div>
                </div>
                <div class="footer"   style={{'background-color': 'rgb(60, 79, 191)'}}>
                  <a href="">查看更多內容
                    <i class='bx bx-right-arrow-alt' ></i>
                  </a>
                </div>
              </div>
              <div ondblclick="" class="stats block">
                <div class="data">
                  <div>
                    <h5>項目最低標準</h5>
                    <h3 class="1" id="data_4">000</h3>
                  </div>
                  <div>
                    <i class='bx bx-barcode'></i>
                  </div>
                </div>
                <div class="footer"   style={{'background-color': 'rgb(236, 42, 123)'}}>
                  <a href="">查看更多內容
                    <i class='bx bx-right-arrow-alt' ></i>
                  </a>
                </div>
              </div>
              <div ondblclick="" class="stats block">
                <div class="data">
                  <div>
                    <h5>數據流動總量</h5>
                    <h3 class="1" id="data_5">000</h3>
                  </div>
                  <div>
                    <i class='bx bx-tachometer'></i>
                  </div>
                </div>
                <div class="footer"   style={{'background-color': 'rgb(31, 190, 161)'}}>
                  <a href="">查看更多內容
                    <i class='bx bx-right-arrow-alt' ></i>
                  </a>
                </div>
              </div>
            </div>
  
            {/* <!--- 主圖形區塊 ---> */}
            <div class="t">
              <div class="block">
                <h3 id="tag">全部</h3>
                <div id='all'></div>
              </div>
              <div class="block">
                <h3 id="tag">狀態</h3>
                <div id='prices'></div>
              </div>
            </div>
            
            {/* <!--- 其他圖形區塊 ---> */}
            <div class="l">
              <div class="block">
                <h3 id="tag">變化</h3>
                <div id='prices'></div>
              </div>
              <div class="block">
                <h3 id="tag">供應數</h3>
                <div id='bys'></div>
              </div>
              <div class="block">
                <h3 id="tag">占比</h3>
                <div id='pie'></div>
              </div>
              <div class="block">
                <h3 id="tag">發生機率</h3>
                <div id='anc'></div>
              </div>
            </div>
          </section>
      </section>
	);
}