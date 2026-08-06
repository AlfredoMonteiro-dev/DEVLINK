import { useState, useEffect } from "react"
import { Header } from "../../components/Header" 
import { Input } from "../../components/Input"
import type { SubmitEvent } from "react";

import { db } from "../../services/firebaseConnection";
import {
    setDoc,
    doc,
    getDoc
}from 'firebase/firestore'

export function Networks(){
    const [ linkedin, setLinkedin] = useState("")
    const [ github, setGitHub] = useState("")

    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setLinkedin(snapshot.data()?.linkedin)
                    setGitHub(snapshot.data()?.github)
                }
            })
        }

        loadLinks()
    }, [])

    function handleRegister(e: SubmitEvent){
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            linkedin: linkedin,
            github: github
        })
        .then(() => {
            console.log("CADASTRADO COM SUCESSO!")
        })
        .catch((error) => {
            console.log("ERROR AO SALVAR" + error)
        })
    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas Redes sociasis</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Linkedin</label>
                <Input
                    type="url"
                    placeholder="Digite a url do Linkedin"
                    value={linkedin}
                    onChange={ (e) => setLinkedin(e.target.value)}
                 />

                 <label className="text-white font-medium mt-2 mb-2">Link do GitHub</label>
                <Input
                    type="url"
                    placeholder="Digite a url do GitHub"
                    value={github}
                    onChange={ (e) => setGitHub(e.target.value)}
                 />

                <button
                type="submit"
                className="cursor-pointer mb-7 bg-blue-600 h-9 rounded-md text-white font-medium  flex justify-center items-center"
                >
                    Salvar Links
                </button>
            </form>
        </div>
    )
}