import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';

export default function SingleChoice({ question, options, id, handleChange, data }) {

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question}</FormLabel>
      <RadioGroup aria-label={id} name={id} defaultValue={data[id]} onChange={e => handleChange(id, e.target.value)}>
        {options.map(option => {
          return (
            <FormControlLabel
              value={option.value}
              checked={data[id] === option.value}
              control={<Radio color="primary" />}
              label={option.label}
              labelPlacement="right"
            />
          );
        })}
      </RadioGroup>
      {data[id] ? (
        <Button variant="outlined" color="primary" onClick={() => handleChange(id, null)}>Clear Answer</Button>
      ) : (<div />)}
    </FormControl>
  );
}
