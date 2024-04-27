import GridNoticias from "@/components/GridNoticias";

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

const NoticiasPage = ({ params }) => {
    return (
        <div>
            <h1>{params.categoria}</h1>
            <GridNoticias noticias={noticias} />
        </div>
    );
}
export default NoticiasPage;