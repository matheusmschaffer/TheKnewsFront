import Noticia from "../../../components/Noticia";

const noticias = [
    {
        id: 1,
        titulo: 'Notícia 1',
        img: 'https://via.placeholder.com/150',
        texto: 'Texto da <b>notícia 1</b>'
    },
    {
        id: 2,
        titulo: 'Notícia 2',
        img: 'https://via.placeholder.com/150',
        texto: 'Texto da <b>notícia 1</b>'
    },
    {
        id: 3,
        titulo: 'Notícia 3',
        img: 'https://via.placeholder.com/150',
        texto: 'Texto da <b>notícia 1</b>'
    }
]

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            {noticias.map(noticia => (
                <Noticia key={noticia.id} noticia={noticia} />
            ))}
        </div>
    );
}

export default HomePage;