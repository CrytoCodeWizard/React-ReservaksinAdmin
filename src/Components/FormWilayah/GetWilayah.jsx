import React from 'react';
import Select from 'react-select';

function GetWilayah() {
    return (
        <div>
            <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
        />
      </Fragment>
        </div>
    );
}

export default GetWilayah;