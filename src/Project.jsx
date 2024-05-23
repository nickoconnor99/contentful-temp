import {useFetchProjects} from './fetchProjects'

function Project() {
    const {projects, loading}  = useFetchProjects();

    if(loading) {
        return (
            <h2>Loading...</h2>
        )
    }
    return ( <section>
        {projects.map((proj) => {
            return (
                <section className='projects'>
                <h2>projects</h2>
                <div className='projects-center'>
                {projects.map((item) => {
                    const {title, img, url, id} = item
                    return (
                        <a key={id} href={url} target='_blank' rel='noreferrer' className='project'>
                        <img src={img} className='img'></img>
                        <h5>{title}</h5>
                        </a>
                    )
                })}
                </div>
                </section>
            )
        })}
        </section> );
}

export default Project;