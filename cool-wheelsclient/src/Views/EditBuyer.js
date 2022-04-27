import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getBuyer } from "../api/data/BuyerData";
import BuyerForm from "../Components/BuyerForm";

export default function EditBuyer() {
  const [editBuyer, setEditBuyer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    
    if (isMounted) {
      getBuyer(id).then(setEditBuyer);
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div>
      <h1>Edit {editBuyer.name}'s Information</h1>
      <BuyerForm buyer={editBuyer} />
    </div>
  );
}
