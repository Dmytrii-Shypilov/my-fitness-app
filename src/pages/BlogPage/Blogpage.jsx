import s from './blog.module.scss'
import ExerciseForm from 'components/ExerciseForm'
import TrainingDay from 'components/TrainingDay'


const BlogPage = () => {
    return (
        <div className={s.section}>
            <h2 className={s.title}>Blog</h2>
            <ExerciseForm/>
            <TrainingDay/>
        </div>
    )
}

export default BlogPage