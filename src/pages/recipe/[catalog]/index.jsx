// // react
import { React, useState, useEffect } from 'react';
import ACTIONS from 'store/registerActions';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import dompurify from 'dompurify';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { CategoryLink } from '../../../components/ui/category';
import { TopNavDetail } from '../../../components/ui/top-nav';
import Empty from '../../../components/ui/recipe/emptyRecipe';
import BasicTabs from 'components/ui/recipe/list/tab';

const Cards = dynamic(() => import('components/ui/recipe/card'));
const CatItemA = '/assets/img/CatItem-1.jpg';
const FailedA = '/assets/img/load-failed/failed1.jpg';

export default function PlantBased() {
  const recipeState = useSelector((state) => state.recipe);
  const recipeCatalogState = useSelector((state) => state.recipeCatalog);
  const dispatch = useDispatch();

  const router = useRouter();
  const { catalog } = router.query;
  const recipeList = recipeCatalogState.listRecipes;
  const loadingCatalog = recipeCatalogState.loading;
  const categoryList = recipeState.listCategory;
  let image = '';

  useEffect(() => {
    if (!catalog) return null;
    if (!router.isReady) return;
    dispatch(ACTIONS.recipe.getListSubcategory(catalog));
    dispatch(ACTIONS.recipeCatalog.getListRecipeCatalog(catalog));
  }, [router.isReady]);

  return (
    <Box>
      <TopNavDetail title={catalog} />
      <CategoryLink categories={categoryList} headCategory={catalog} />
      {loadingCatalog === false ? (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            margin: '6px',
          }}
        >
          {recipeList.length === 0 ? (
            <Empty page="recipe" />
          ) : (
            recipeList.map((recipe) => {
              if (recipe.better_featured_image != null) {
                image = recipe.better_featured_image.source_url;
              } else {
                image = FailedA;
              }
              return (
                <Link href={`/resep/${recipe.slug}`}>
                  <Box sx={{ width: '50%', padding: '6px' }}>
                    <Cards
                      title={recipe.title.rendered}
                      img={image}
                      time={recipe.acf.time}
                    />
                  </Box>
                </Link>
              );
            })
          )}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '12px' }}>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
          <Box sx={{ width: '50%', padding: '6px' }}>
            <Skeleton height={'200px'} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
