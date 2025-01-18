import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { ratingType } from "@/types/typeFiles";
const RatingComponent: React.FC<ratingType> = ({ color, rating }) => {  
  return (
    <div className="w-3/4">
      <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
        <Rating
          name="text-feedback"
          value={rating || 0}
          readOnly
          precision={0.5}
          sx={{
            "& .MuiRating-iconFilled": {
              color: color || "#000000",
            },
            "& .MuiRating-iconEmpty": {
              color: "#ccc",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default RatingComponent;
