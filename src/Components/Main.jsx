import { useState } from "react";

export default function Main() {
    const languages = [
        {
            id: 1,
            title: "HTML",
            description:
                "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.",
        },
        {
            id: 2,
            title: "CSS",
            description:
                "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla layout, colori e caratteri di una pagina web.",
        },
        {
            id: 3,
            title: "JavaScript",
            description:
                "JavaScript è un linguaggio di programmazione dinamico che consente interattività come animazioni, pulsanti cliccabili e contenuti dinamici sui siti web.",
        },
        {
            id: 4,
            title: "Node.js",
            description:
                "Node.js è un ambiente JavaScript lato server che consente di usare JavaScript anche nel backend, permettendo un linguaggio unico tra client e server.",
        },
        {
            id: 5,
            title: "Express",
            description:
                "Express è un framework minimalista per Node.js che semplifica la creazione di applicazioni web e API, gestendo facilmente rotte e richieste.",
        },
        {
            id: 6,
            title: "ReactJS",
            description:
                "ReactJS è una libreria per costruire interfacce utente moderne e componenti riutilizzabili, ideale per applicazioni a pagina singola (SPA).",
        },
    ];
    const [selected, setSelected] = useState(languages[0]);

    return (
        <main>

        </main>
    )
}



