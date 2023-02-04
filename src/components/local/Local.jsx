import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserMarkers } from '../../services/getUserMarkers';
import Loader from '../loader/Loader';
import LocalImage from '../../assets/unimarcLinares1.jpeg'
import './local.css'
import Sidebar from '../sidebar/Sidebar';

const Local = () => {
    const { ceco } = useParams();
    const [local, setLocal] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserMarkers().then((data) => {
            const filter = data.filter(local => local.ceco === ceco)
            setLocal(filter[0])
            console.log('Locals list:', data)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [local])

    // <div className='local-container' style={{ backgroundImage: `url(${LocalImage})` }}>
    return (
        <>
            {<Loader show={(loading == true) ? true : false} />}
            <div className="container">
                <Sidebar />
                <div className='local-container'>
                    <div className="grid grid-cols-3 place-items-center place-content-center pt-6">
                        <div className="bg-rose-900 col-span-2 w-[600px] h-[200px] rounded-3xl"> col 2</div>
                        <div className="bg-rose-900 col-span-1 w-[200px] h-[200px] rounded-3xl"> col 1</div>
                    </div>
                </div>

                <h1>info</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus qui voluptatum voluptate iusto molestiae rem ab sint, consequuntur excepturi, impedit recusandae. Doloremque, ex accusamus sed ab accusantium, quod iure laborum cum, voluptatum nemo dolorum atque veniam error saepe! Minima necessitatibus fugiat at, est dolores, ullam magnam, perferendis maiores hic reiciendis voluptatem. Temporibus harum rerum magnam ducimus voluptatem sit obcaecati totam ut nihil animi, facilis amet quaerat. Obcaecati laudantium ratione pariatur fuga aliquid cupiditate delectus sequi ipsum inventore neque, laboriosam quis molestias commodi ipsa quia alias tenetur magni perferendis doloribus temporibus veritatis nam hic et assumenda. Magnam nemo ut itaque odit ipsam nostrum, quos adipisci accusamus doloribus accusantium quaerat? Eaque, soluta, vel eligendi ea quia quisquam nam voluptatum pariatur blanditiis cupiditate expedita quos sit tempora vitae facilis aliquam iusto illum maxime. Voluptatum natus sint accusantium doloribus dolores quaerat ad vitae voluptates laborum atque delectus pariatur possimus, mollitia consequatur? Eum, necessitatibus maxime id similique accusamus fuga harum. Expedita, dolores voluptatibus. Quae consequatur voluptatibus, fugit non nihil numquam dolorum et perspiciatis quaerat dolor quasi ipsam dicta illo vero nemo doloribus! Ipsam, corporis inventore deleniti laudantium ea nam a nobis odit modi error, cupiditate praesentium, sit magnam perspiciatis officia labore accusamus ullam commodi! Sunt expedita reiciendis voluptatum blanditiis! Cum, quis voluptatum! Exercitationem voluptatem velit maiores doloribus accusantium, aliquid excepturi fugiat magni expedita rerum accusamus. Dolor tempora exercitationem dolorem quidem tenetur maiores in reiciendis, quia placeat ipsum necessitatibus amet quos dolorum odit vero! Commodi voluptate veritatis quidem quas recusandae culpa nihil, quod esse nulla, magni atque quae quam quos est provident aperiam soluta debitis suscipit neque! Qui fuga voluptatibus nemo quaerat temporibus itaque facere quia recusandae quis hic, eius consequatur nulla nam in, veritatis similique libero ipsam repudiandae non. Obcaecati pariatur reprehenderit asperiores incidunt veniam, fuga cupiditate natus architecto, fugiat temporibus doloribus velit earum facilis eligendi modi quis repudiandae atque corrupti minus distinctio in sequi vitae. Porro odit temporibus aut aliquid, aliquam consequuntur velit maxime, blanditiis asperiores, sunt provident facilis ducimus ex ipsa dolorum voluptates exercitationem doloribus reprehenderit amet. Ab et quis nesciunt, fugiat explicabo tempora aspernatur. Sit, porro alias non minus saepe, in ullam autem, unde doloremque sed ea explicabo sequi esse debitis illo impedit maxime. Quibusdam, voluptate sequi, odio necessitatibus, blanditiis obcaecati eligendi ipsa corrupti repellat vero iusto cum provident atque unde exercitationem praesentium quis ex? Nobis iusto in quidem necessitatibus quas hic animi voluptate qui. Repellat, hic quasi iure totam eius architecto iste! Consequuntur, rem possimus harum neque consectetur asperiores at laborum qui, corporis debitis quas quos. Facere illum consequuntur commodi ipsam id praesentium dolorem ducimus aspernatur deserunt harum architecto perspiciatis recusandae nihil repudiandae expedita, quos similique sint! At veritatis vitae sed voluptas maiores dolorum magnam aliquam minima veniam hic. Ab temporibus vitae quis nulla quos nobis perferendis beatae autem quod magni sunt recusandae est corporis quidem deserunt quae maxime, tempora velit hic quia fugit ea eveniet, nam ut! Harum odit nemo placeat provident porro quam quas magnam pariatur, fugiat vitae, animi totam recusandae dolor asperiores dignissimos rerum neque reprehenderit minima officia?</p>
            </div>
        </>
    )
}

//<img className='object-cover h-60 w-60 rounded-3xl drop-shadow-xl' src="https://res.cloudinary.com/dvkskgsbk/image/upload/v1674861050/smu/f3zeam1kj8bpblkjuys5.webp" alt="" />
export default Local