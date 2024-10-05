import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css";

export default function PaginationComponent({ page, handlePageChange, totalPages }) {
    return (
        <div className='pagination-component'>
            <Pagination 
                count={totalPages} 
                page={page} 
                onChange={(e, value) => handlePageChange(e, value)} 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    "& .MuiPaginationItem-root": {
                        color: "#000000 !important", // Black text color for unselected page numbers
                        backgroundColor: "#ffffff", // White background for page buttons
                        border: "1px solid #cccccc", // Light grey border for items
                        borderRadius: "4px", // Rounded corners
                        margin: "0 4px", // Spacing between items
                        transition: "0.3s ease-in-out", // Smooth hover effect
                    },
                    "& .Mui-selected": {
                        backgroundColor: "#003366 !important", // Blue background for selected page button
                        color: "#ffffff !important", // White text for selected items
                        borderColor: "#003366 !important",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)", // Optional shadow for emphasis
                    },
                    "& .MuiPaginationItem-root:hover": {
                        backgroundColor: "#f1f1f1", // Light grey hover background for page buttons
                        color: "#003366", // Dark blue text color on hover
                        borderColor: "#003366", // Dark blue border on hover
                    },
                    "& .MuiPaginationItem-ellipsis": {
                        border: "none", // No border for ellipsis
                    },
                    "& .MuiPagination-ul": {
                        padding: "0",
                    },
                    "& .MuiPaginationItem-icon": {
                        color: "#003366", // Dark blue color for arrow icons (next/previous)
                    },
                }}
            />
        </div>
    );
}
