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
                        color: "#000000 !important", 
                        backgroundColor: "#ffffff", 
                        border: "1px solid #cccccc", 
                        borderRadius: "4px", 
                        margin: "0 4px", 
                        transition: "0.3s ease-in-out", 
                    },
                    "& .Mui-selected": {
                        backgroundColor: "#003366 !important",
                        color: "#ffffff !important", 
                        borderColor: "#003366 !important",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                    },
                    "& .MuiPaginationItem-root:hover": {
                        backgroundColor: "#f1f1f1", 
                        color: "#003366", 
                        borderColor: "#003366", 
                    },
                    "& .MuiPaginationItem-ellipsis": {
                        border: "none", 
                    },
                    "& .MuiPagination-ul": {
                        padding: "0",
                    },
                    "& .MuiPaginationItem-icon": {
                        color: "#003366", 
                    },
                }}
            />
        </div>
    );
}
