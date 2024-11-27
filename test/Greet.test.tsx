import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import Greet from '../src/component/Greet'
import React from 'react'


describe('Greet', () => {
    it('should display the correct greeting message', async () => {
      render(<Greet name="bipin" />);
      const heading = await screen.findByRole('heading');
      expect(heading).toHaveTextContent("Greeting's bipin");
    });
  });