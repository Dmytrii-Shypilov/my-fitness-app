import s from './footer.module.scss'


const Footer = () => {
    return(
        <footer className={s.footer}>
            <div className={s.container}>
                <p className={s.text}>
                    ScienceFit
                </p>
            </div>
        </footer>
    )
}

export default Footer