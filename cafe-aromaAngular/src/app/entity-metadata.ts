import { EntityDataModuleConfig, EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Product: {},
  Promotion: {},
  Testimonials: {}
};

const pluralNames: EntityPluralNames = {
    Testimonials: 'testimonials',
    Product: 'products',
    Promotion: 'promotions'
  };

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
  };
