import { view } from 'react-nature';

import tarefas from '../mocks/tarefas.js'

export default function Lista(){
   
   const renderizar = ({item}) => {
    <view>
        <view>
        <Image source={item.imagem} />
        <Text>{item.imagem}</Text>
    </view>
        <text>{item.descricao}</text>
        </view>
   }

   return(
    <view>
        <flatList
            data={tarefas}
            renderitem={renderizar}
            heyExtractor={item => item.id}
        />
    </view>
   );
};