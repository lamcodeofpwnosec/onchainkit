import { beforeEach, describe, expect, it } from 'vitest';
import type { LifeCycleStatus } from '../types';
import { isSpinnerDisplayed } from './isSpinnerDisplayed';

describe('isSpinnerDisplayed', () => {
  let transactionHash: string;
  let errorMessage: string;
  let lifeCycleStatus: LifeCycleStatus;
  let transactionId: string;
  let isLoading: boolean;

  beforeEach(() => {
    transactionHash = '123';
    errorMessage = '';
    lifeCycleStatus = { statusName: 'init', statusData: null };
    transactionId = '';
    isLoading = false;
  });

  it('should return true if transaction hash exists', () => {
    const result = isSpinnerDisplayed({
      errorMessage,
      isLoading,
      lifeCycleStatus,
      transactionHash,
      transactionId,
    });
    expect(result).toEqual(true);
  });

  it('should return true if isLoading', () => {
    transactionHash = '';
    errorMessage = '';
    transactionId = '';
    isLoading = true;
    const result = isSpinnerDisplayed({
      errorMessage,
      isLoading,
      lifeCycleStatus,
      transactionHash,
      transactionId,
    });
    expect(result).toEqual(true);
  });

  it('should return true if status is pending', () => {
    transactionHash = '';
    errorMessage = '';
    lifeCycleStatus = { statusName: 'transactionPending', statusData: null };
    transactionId = '';
    isLoading = false;
    const result = isSpinnerDisplayed({
      errorMessage,
      isLoading,
      lifeCycleStatus,
      transactionHash,
      transactionId,
    });
    expect(result).toEqual(true);
  });

  it('should return false if errorMessage exists', () => {
    transactionHash = '';
    errorMessage = 'error message';
    transactionId = '';
    isLoading = false;
    const result = isSpinnerDisplayed({
      errorMessage,
      isLoading,
      lifeCycleStatus,
      transactionHash,
      transactionId,
    });
    expect(result).toEqual(false);
  });

  it('should return true if transaction id exists', () => {
    transactionHash = '';
    errorMessage = '';
    transactionId = '123';
    isLoading = false;
    const result = isSpinnerDisplayed({
      errorMessage,
      isLoading,
      lifeCycleStatus,
      transactionHash,
      transactionId,
    });
    expect(result).toEqual(true);
  });
});
