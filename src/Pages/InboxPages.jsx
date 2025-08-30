import { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom";


const InboxPages = () => {
    const [Allmassage, setMassage] = useState([])
    useEffect(()=>{
     fetch('inbox.json')
     .then(res => res.json())
     .then(data => setMassage(data))
    },[])
   
    return (
        
        <div className="grid gap-y-2 ">
            <Outlet/>
          { Allmassage.map(sms => { 
              return(
                  <Link key={sms.id} to={`/inbox/${sms.id}`}  className="border-b-2 border-amber-500 py-4">
                <h4 className="text-lg font-medium ">{sms.sender}</h4>
               <p>{sms.body}</p>
                
          </Link>
            )
        })
    }
        
        </div>
    );
};

export default InboxPages;


