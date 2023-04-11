import React from 'react'
import './home.css'
export default function Home() {
  return (
    <div className="home">
        <div className="card">
        <div className="card-header">
            <div className="card-pic">
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width={500} height={500} alt="">
                </img>
            </div>
            <h5>Ramesh</h5>
        </div>
        {/* card image */}
        <div className='card-image'>
            <img src ="https://th.bing.com/th/id/OIP.KrKaHAdNU4CjcFljlfx5JAHaH7?pid=ImgDet&rs=1" alt ="">
            </img>
        </div>
        {/* card content  */}
        <div className='card-content'>
        <span class="material-symbols-outlined">
            favorite
        </span>
        <p>one like</p>
        <p>This is amazing</p>
        </div>
        <div className='add-comment'>
        <span class="material-symbols-outlined">
        mood
        </span>
        <input type="text" placeholder='Add a comment ' ></input>
        <button className='comment'>Post</button>
        </div>
        </div>
    </div>
  )
}
