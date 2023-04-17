import { userService } from 'services';
import { Link } from 'components';

export default Home;

function Home() {
    return (
    <>
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                {userService.userValue?.role && (<p><Link href="/users">Manage Users</Link></p>)}
            </div>
        </div>

        {/* <>
            <div className="vh-80 d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:'#FFF',borderRadius:'4px',width:'22rem',height:'300px',boxShadow:'0px 4px 4px rgba(0,0,0,.25)'}}> 
            <h3 className={`text-center mt-4`}  style={{fontSize:'23px', color: '#24a9e0'}}>Welcome to D2m Catalyst</h3>
            </div>
        </> */}
    </>
    );
}
