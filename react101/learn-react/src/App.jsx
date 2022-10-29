// import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
// import clsx from 'clsx';
// import Button from './components/Button';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    const type = 'submit';
    const onClick = () => console.log('Login with another style');
    return (
        <div className={'bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center  min-h-screen'}>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio iure nesciunt tempore sequi omnis laudantium magnam
                        amet quam voluptatum.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
            {/* <div className='flex gap-x-2'>
                <Button {...{ type, onClick }}>
                    <IconBrandFacebook />
                    Login
                </Button>
                <Button className='bg-sky-600' onClick={() => console.log('Login')} type='reset'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className='bg-black-500' onClick={() => console.log('Login')} type='button'>
                    <IconBrandGithub />
                    Login
                </Button>
            </div> */}
        </div>
    );
}

// const Title = () => {
//     <>
//         <h1>Hello World</h1>
//         <h4>Hello World</h4>
//     </>
// }

export default App;
