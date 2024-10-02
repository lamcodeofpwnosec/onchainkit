import { useCapabilities } from '@/lib/hooks';
import { clickContracts, clickCalls } from '@/lib/transactions';
import { TransactionDefault } from '@coinbase/onchainkit/transaction';
import { useCallback, useContext, useEffect } from 'react';
import { AppContext, TransactionTypes } from '../AppProvider';

export default function TransactionDefaultDemo() {
  const { chainId, transactionType } = useContext(AppContext);
  const capabilities = useCapabilities();
  const contracts = clickContracts;
  const calls = clickCalls;
  useEffect(() => {
    console.log('Playground.Transaction.chainId:', chainId);
  }, [chainId]);
  const handleOnStatus = useCallback((status) => {
    console.log('Playground.Transaction.onStatus:', status);
  }, []);

  useEffect(() => {
    console.log('Playground.Transaction.transactionType:', transactionType);
    if (transactionType === TransactionTypes.Calls) {
      console.log('Playground.Transaction.calls:', calls);
    } else {
      console.log('Playground.Transaction.contracts:', contracts);
    }
  }, [transactionType, calls, contracts]);

  return (
    <div className="mx-auto grid w-1/2 gap-8">
      <TransactionDefault
        chainId={chainId ?? 84532} // something breaks if we don't have default network?
        {...(transactionType === TransactionTypes.Calls
          ? { calls }
          : { contracts })}
        capabilities={capabilities}
        onStatus={handleOnStatus}
        disabled={!chainId && !transactionType}
      />
    </div>
  );
}
