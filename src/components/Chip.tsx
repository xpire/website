import React from 'react';
import { navigate } from 'gatsby';
import { kebabCase } from 'lodash';
import { Chip } from './StyledMaterial';

const MyChip = ({ link, label }: { link: string; label?: string }) => (
  <Chip
    label={typeof label === 'undefined' ? link : label}
    size="small"
    onClick={() => navigate(`/blog/tags/${kebabCase(link)}`)}
  />
);

export default MyChip;
