import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./Style.css";


const Query = ({ details }) => {
    const [isActive, setIsActive] = useState(false);

    const renderAnswer = () => {
        const { reply } = details;

        if (isActive) {
            return (
                <div>
                    <p className='reply'>{reply}</p>
                </div>
            );
        }
        return null;
    };

    const onToggleOpen = () => {
        setIsActive((prevState) => !prevState);
    }

    const { query } = details;

  return (
    <li className='item'>
        <div className="query-con">
            <h1 className='query'>{query}</h1>
            <button className='button' type='button' onClick={onToggleOpen}>
                {isActive ? (
                    <AiFillMinusCircle className='icon' />
                ) : (
                    <AiFillPlusCircle className='icon' />
                )}
            </button>
        </div>
    {renderAnswer()}
    </li>
  );
};

export default Query;
