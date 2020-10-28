import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useToast } from '@/hooks/toast';

import SEO from '@/components/SEO';
import Button from '@/components/Button';

import {
  Content,
  RecipeContainer,
  ConvertedRecipeContainer,
  ButtonContainer,
} from '@/styles/pages/RecipeConverted';

const ConvertedRecipe: React.FC = () => {
  const [storedRecipe, setStoredRecipe] = useState('');

  useEffect(() => {
    const recipe = localStorage.getItem('@ConvertMyRecipe:recipe');

    if(!recipe) {
      router.push("/");
      return;
    }

    setStoredRecipe(recipe);
  }, []);

  const { addToast } = useToast();
  const router = useRouter();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(storedRecipe);

      addToast({
        type: 'success',
        title: 'Copy to clipboard',
        description: 'The recipe was copied to your clipboard',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Copy to clipboard',
        description: 'Could not copy the recipe to your clipboard',
      });
    }
  }, [addToast, storedRecipe]);

  return (

      <Content>

        <SEO title="Converted Recipe" shouldIndexPage={false} />

        <RecipeContainer className="col-sm-9 col-md-8 col-lg-6">
          <ConvertedRecipeContainer>
            <div>{storedRecipe}</div>
          </ConvertedRecipeContainer>

          <ButtonContainer>
            <Button className="d-none d-sm-block col-sm-2" onClick={handleCopy}>
              Copy
            </Button>
            <Button className="col-sm-9" onClick={() => router.push('/')}>
              Restart
            </Button>
          </ButtonContainer>
        </RecipeContainer>
      </Content>

  );
};

export default ConvertedRecipe;
