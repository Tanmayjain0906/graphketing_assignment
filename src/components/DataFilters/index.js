import React, { useContext, useState } from 'react';
import { Checkbox, FormControl, FormGroup, FormControlLabel, Accordion, AccordionSummary, AccordionDetails, Typography, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import userListContext from '../../context/userListContext';

const DataFilters = () => {
  // Set initial state to have "All" selected for both categories
  const {handleCategory, department, status} = useContext(userListContext);
  const [selectedFilters, setSelectedFilters] = useState({
    department: department,
    status: status
  });

  // Accordion state
  const [expanded, setExpanded] = useState(false);
  

  // Toggle accordion sections
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value
    }));

     if(category === "department")
     {
        handleCategory(value, selectedFilters.status);
     }
     else
     {
        handleCategory(selectedFilters.department, value);
     }
  };

  return (
    <Box 
      sx={{ 
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        background: '#fff', 
        padding: '16px', 
        borderRadius: '8px', 
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
        minWidth: '200px' 
      }}
    >
      <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        Data Filters
        <IconButton size="small" onClick={() => setExpanded(false)}>
          <CloseIcon />
        </IconButton>
      </Typography>

      {/* Department Filter */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1-header">
          <Typography>Department</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormGroup>
              {['All', 'Finance', 'Engineer', 'Arts'].map((dept) => (
                <FormControlLabel
                  key={dept}
                  control={
                    <Checkbox
                      checked={selectedFilters.department === dept}
                      onChange={() => handleFilterChange('department', dept)}
                    />
                  }
                  label={dept}
                />
              ))}
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Status Filter */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel2-header">
          <Typography>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormGroup>
              {['All', 'Active', 'Inactive', 'Blocked', 'Suspended'].map((status) => (
                <FormControlLabel
                  key={status}
                  control={
                    <Checkbox
                      checked={selectedFilters.status === status}
                      onChange={() => handleFilterChange('status', status)}
                      sx={{
                        '&.Mui-checked': {
                          color: status === 'Active' ? 'green' :
                                 status === 'Inactive' ? 'orange' :
                                 status === 'Blocked' ? 'red' :
                                 status === 'Suspended' ? 'orange' : 'default'
                        }
                      }}
                    />
                  }
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {status}
                      {status !== 'All' && (
                        <Box
                          component="span"
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor:
                              status === 'Active'
                                ? 'green'
                                : status === 'Inactive'
                                ? 'orange'
                                : status === 'Blocked'
                                ? 'red'
                                : status === 'Suspended'
                                ? 'orange'
                                : 'transparent',
                            marginLeft: 1
                          }}
                        />
                      )}
                    </Box>
                  }
                />
              ))}
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DataFilters;
