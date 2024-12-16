import Slider from '../components/Slider'
function Carru() {
    const mockImagenes = [
        "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/1abfe716-f7c8-481b-a73c-79243b28440f/Landing-MyMilan-Lug2021.jpg?w=2048&auto=format/400",
        "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/8f28a3a0-72a5-4238-8f1a-911633beab0b/Landing-App-su-Web-Set2024-Def.png?w=2048&auto=format/400",
        "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/26b68091-8fa0-4255-a9fb-43c771e1c175/Landing-MilanTV-Lug2021.png?w=2048&auto=format/400",
    ];

    return <Slider imagenes={mockImagenes}/>;
}

export default Carru;