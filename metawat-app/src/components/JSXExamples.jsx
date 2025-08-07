import React from "react"

function JSXExamples(){
    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'สมหญิง';
    const age = 22;

    const currentYear = new Date().getFullYear();

    const user ={
            firstName: 'เมธาวัฒน์',
            lastName: 'คูศิริวานิชกร',
            age: 22,
            hobbies:['ฟังเพลง','เล่นเกม','นอนกลางวัน']
    };

    const formatName = (user) => {
        return '${user.firstName} ${user.lastName}';
    }
        const isloggedIn = true;
        const hasNotification = 3;

        return(
            <div className="jsx-examples">
                <h1>JSX Example</h1>
                <section>
                    <h2>การแสดงผลข้อมูล</h2>
                    {greeting}
                    <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                    <p>นี่คือปี {currentYear}</p>
                    <p>ชื่อจริงซ {formatName(user)}</p>
                </section>

                <section>
                    <h2>Attributes ใน JSX</h2>
                    <div className="card">
                        <p className="text-pimary">ใช้ className แทน class</p>
                    </div>
                    <button
                        onClick= {()=> alert('Button Cliked!')}
                        onMouseEnter={() =>console.log('Mouse Entered!')}>
                            Hover me or Click me!
                    </button>
                
                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{color: '#2D4A2B',fontWeight: 'bold'}}>
                        Inline styles ใช้ object
                    </p>
                </div>
                </section>

                <section>
                    <h2>Conditional Rendering</h2>
                    <p>สถานะ:{isloggedIn ? 'ออนไลน์':'ออฟไลน์'}</p>

                    {hasNotification>0&&(
                        <div className="notificatio">
                            คุณมีการแจ้งเตือน {hasNotification} รายการ
                        </div>
                    )}

                    {(()=>{
                        if (user.age>=18){
                            return <p>คุณเป็นผู้ใหญ่</p>;
                        }else{
                            return <p>คุณยังไม่บรรลุนิติภาวะ</p>;
                        }
                    })()}
                </section>
                <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>
                
                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'หมอน', price: 400, inStock: true },
                        { id: 2, name: 'ผ้าห่ม', price: 599, inStock: true },
                        { id: 3, name: 'เตียง', price: 1200, inStock: false }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>
                
                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>
            
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type="text" 
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />
                
                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                    <option value="go">Go</option>
                </select>
            </section>
            
            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                
            </section>
            </div>
            
        );
    }

    export default JSXExamples;


