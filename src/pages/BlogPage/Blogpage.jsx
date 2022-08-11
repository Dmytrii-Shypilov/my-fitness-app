import s from './blog.module.scss'
import ExerciseForm from 'components/ExerciseForm'


const BlogPage = () => {
    return (
        <div className={s.section}>
            <h2 className={s.title}>Blog</h2>
            <ExerciseForm/>
        </div>
    )
}

export default BlogPage