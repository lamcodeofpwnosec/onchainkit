import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
import '@rainbow-me/rainbowkit/styles.css';

function WalletComponent() {
  const { address } = useAccount();

  return (
    <div className="flex justify-end">
      <Wallet>
        <ConnectWallet
          text="Connect Wallet"
          withWalletAggregator={true}
          onConnect={() => alert('ALERT!')}
        >
          <Avatar address={address} className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick={true}>
            <Avatar />
            <Name />
            <Address className={color.foregroundMuted} />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <WalletDropdownLink
            icon="wallet"
            href="https://keys.coinbase.com"
            target="_blank"
          >
            Wallet
          </WalletDropdownLink>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}

export default function kWalletDemo() {
  return (
    <div className="mx-auto">
      <WalletComponent />
    </div>
  );
}
