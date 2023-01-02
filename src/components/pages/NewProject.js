import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject () {

    const navigate = useNavigate()

    function createPost(project) {

        //initializa cost and services
        project.cost = 0
        project.services = []

        fetch ('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })

        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/Projects', { message :'Projeto criado com sucesso!'})
        })
        .catch((err) => console.log(err))
    }

    return (
        <section className={styles.newprojectContainer}>            
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </section>
    )
}

export default NewProject