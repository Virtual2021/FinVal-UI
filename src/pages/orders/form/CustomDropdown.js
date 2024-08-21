import React from 'react';
import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

const CustomDropdown = ({ data, value, onChange, error, name }) => {
  
  // Format the tree nodes from the data
  const formatTreeNodes = (data) => {
    return Object.keys(data).map(industry => {      
      // Check if data[industry] is an array
      if (!Array.isArray(data[industry])) {
        console.error(`Expected an array for ${industry}, but got ${typeof data[industry]}`);
        return null;
      }
  
      return (
        <TreeNode
          value={industry}
          title={industry} // Make the main industry visually non-clickable
          key={industry}
        >
          {data[industry].map(subItem => (
            <TreeNode value={subItem.name} title={subItem.name} key={subItem.name} />
          ))}
        </TreeNode>
      );
    });
  };
  
  
  // Handle change event
  const handleChangeInternal = (value) => {
    onChange({ target: { name, value } });
  };

  return (
    <div className={`form-group ${error ? 'is-invalid' : ''}`}>
      <TreeSelect
        style={{ width: '100%' }}
        value={value || undefined}
        placeholder="Select your Industry"
        onChange={handleChangeInternal}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      >
        {formatTreeNodes(data)}
      </TreeSelect>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default CustomDropdown;
