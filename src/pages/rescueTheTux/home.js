import TerminalWindow from '../../components/terminal/terminalWindow';
import WelcomeText from './welcome';
import Instructions from './instructions';
import Challenges from './challenges';
import LeaderBoard from './leaderboard';
import Registration from './registration';
import Login from './login';

export default function RTTEvent() {
  return (
    <>
      <TerminalWindow
        title='Rescue the Tux'
        prompts={[
          { path: '~', command: 'cd rescue-the-tux' },
          {
            path: '~/rescue-the-tux',
            command: './rescue-the-tux --play',
          },
        ]}
      >
        <WelcomeText />
        <Instructions />
        <Registration />
        <Login />
        <Challenges />
	<LeaderBoard />
      </TerminalWindow>
    </>
  );
}
