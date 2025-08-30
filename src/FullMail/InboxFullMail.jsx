import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';


const InboxFullMail = () => {
  const { id } = useParams(); // URL থেকে id বের করো
  const [mail, setMail] = useState(null);

  useEffect(() => {
    fetch('/inbox.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(m => m.id === parseInt(id)); // id মিলাও
        setMail(selected);
      });
  }, [id]);

  if (!mail) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{mail.subject}</h2>
      <p className="text-sm text-gray-600 mb-1">From: {mail.sender}</p>
      <p className="text-sm text-gray-600 mb-3">Time: {new Date(mail.time).toLocaleString()}</p>
      <hr className="my-2" />
      <p className="whitespace-pre-line leading-relaxed">{mail.body}</p>
      <Link className=' hover:text-amber-400' to='/'>< GrPrevious className='my-10' size={24}/></Link>
    </div>
  );
};

export default InboxFullMail;
