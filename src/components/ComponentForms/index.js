import { TextForm } from './TextForm';
import { TextAreaForm } from './TextAreaForm';
import { LinkForm } from './LinkForm';
import { ImageForm } from './ImageForm';
import { IframeForm } from './IframeForm';

export const AvailableComponentForms = {
  'h1': TextForm,
  'h2': TextForm,
  'h3': TextForm,
  'h4': TextForm,
  'h5': TextForm,
  'h6': TextForm,
  'p': TextAreaForm,
  'a': LinkForm,
  'img': ImageForm,
  'iframe': IframeForm,
};
