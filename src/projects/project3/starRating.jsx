import React, {useState} from "react";
import '../../App.css'

function StarRating() {
  const [selectedIndex, setSelectedIndex] = useState()
  const [selectedStarIndex, setSelectedStarIndex] = useState(0)
  const arr = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div>
      {arr.map((ele, index) => {
        return (
          <span
          key={index}
          onMouseEnter={(e)=>{setSelectedStarIndex(index+1)}}
          onMouseLeave={(e)=>{setSelectedStarIndex(selectedIndex??0)}}
          onClick={(e)=>{setSelectedStarIndex(index+1), setSelectedIndex(index+1)}}
          className={index<selectedStarIndex?'fill':''}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
