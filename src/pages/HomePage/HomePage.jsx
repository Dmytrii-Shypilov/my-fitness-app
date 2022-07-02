import s from './home.module.scss';
import fitness from '../../images/fitness-lady.jpg';

const HomePage = () => {
  return (
    <div className={s.section}>
      <h1 className={s.title}>Welcome to ScienceFiT</h1>
      <div className={s.wrapper}>
        <div>
          <img className={s.image} src={fitness} alt="" />
        </div>
        <div className={s.textBlock}>
          <p className={s.paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            ipsa labore facere inventore ullam delectus eligendi cumque, maiores
            repellendus consequuntur eaque dicta, nobis cupiditate quae!
            Incidunt laborum ducimus velit quas? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Assumenda ipsa labore facere
            inventore ullam delectus eligendi cumque, maiores repellendus
            consequuntur eaque dicta, nobis cupiditate quae! Incidunt laborum
            ducimus velit quas? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Assumenda ipsa labore facere inventore ullam
            delectus eligendi cumque, maiores repellendus consequuntur eaque
            dicta, nobis cupiditate quae! Incidunt laborum ducimus velit quas?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            ipsa labore facere inventore ullam delectus eligendi cumque, maiores
            repellendus consequuntur eaque dicta, nobis cupiditate quae!
            Incidunt laborum ducimus velit quas? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Assumenda ipsa labore facere
            inventore ullam delectus eligendi cumque, maiores repellendus
            consequuntur eaque dicta, nobis cupiditate quae! Incidunt laborum
            ducimus velit quas? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Assumenda ipsa labore facere inventore ullam
            delectus eligendi cumque, maiores repellendus consequuntur eaque
            dicta, nobis cupiditate quae! Incidunt laborum ducimus velit quas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            ipsa labore facere inventore ullam delectus eligendi cumque, maiores
            repellendus consequuntur eaque dicta, nobis cupiditate quae!
            Incidunt laborum ducimus velit quas? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Assumenda ipsa labore facere
            inventore ullam delectus eligendi cumque, maiores repellendus
            consequuntur eaque dicta, nobis cupiditate quae! Incidunt laborum
            ducimus velit quas? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Assumenda ipsa labore facere inventore ullam
            delectus eligendi cumque, maiores repellendus consequuntur eaque
            dicta, nobis cupiditate quae! Incidunt laborum ducimus velit quas?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            ipsa labore facere inventore ullam delectus eligendi cumque, maiores
            repellendus consequuntur eaque dicta, nobis cupiditate quae!
            Incidunt laborum ducimus velit quas? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Assumenda ipsa labore facere
            inventore ullam delectus eligendi cumque, maiores repellendus
            consequuntur eaque dicta, nobis cupiditate quae! Incidunt laborum
            ducimus velit quas? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Assumenda ipsa labore facere inventore ullam
            delectus eligendi cumque, maiores repellendus consequuntur eaque
            dicta, nobis cupiditate quae! Incidunt laborum ducimus velit quas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
