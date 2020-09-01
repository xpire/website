import React from 'react';
import { navigate, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { Chip } from '../components/StyledMaterial';

const MyChip = ({ link, label }: { link: string; label?: string }) => {
  if (typeof label === `undefined`) {
    label = link;
  }
  return (
    <Chip
      label={label}
      onClick={() => navigate(`/blog/tags/${kebabCase(link)}`)}
    />
  );
};

export default MyChip;

{
  /* <Chip
variant="outlined"
size="small"
label={label}
style={{
  color: 'var(--color-text)',
  borderColor: 'var(--color-text)',
}}
onClick={() => {
  navigate(`/blog/tags/${label}`);
}}
/> */
}
