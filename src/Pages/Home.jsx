import { useState } from 'react';
import '../App.css'



function Home() {
    const [data, setData] = useState(null)

    const [userData, setUserData] = useState({})
    const [formData, setFormData] = useState({
        cover: "",
        genre: "",
    })
    function apiCall() {
        const cover = userData.cover
        const genre = userData.genre
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${cover}-${genre}.json?api-key=Xzp1k8JxAfn653QRpKyfkjnSWlaMnAvU`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results.books, "DATA")

                setData(data.results.books)
            }).catch((error) => console.log(error))
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value, "VALUE")
        setFormData({ ...formData, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", userData);
        console.log("Form submitted formData:", formData);
        setUserData(formData)
        setFormData({
            cover: "",
            genre: "",
        })
        apiCall()
    };
    return (

        <div className='check'>
        <h1>Check out the New York Times Best Seller's Lists for Books!</h1>
            <div className='form-wrapper'>
                <form className='form'>
                    <label>
                        Paperback or hardcover ?
                    </label><br />
                    <select name='cover' id='cover' onChange={handleInputChange}>
                        <option defaultValue="default"  >choose a type of cover</option>
                        <option value="hardcover" >Hardcover</option>
                        <option value="paperback">softcover</option>
                    </select>
                    <br />
                    <br />
                    <label>
                        Fiction or Non-Fiction?
                    </label><br />
                    <select name='genre' id='bool' onChange={handleInputChange}>
                        <option defaultValue="default"  >choose genre </option>
                        < option value="fiction">fiction</option>
                        <option value="nonfiction">non-fiction</option>
                    </select>
                </form><br />

                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className='books-wrapper'>
                {data ? data.map((item, key) => {
                    return (

                        <div className='books' key={key}>
                            <p className='rank'>{item.rank}</p><br />
                            <img src={item.book_image} />
                            <p className='title'>{item.title}</p>

                        </div>)
                }) : null}
            </div>

        </div>

    )
}









export default Home
