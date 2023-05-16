import React from 'react';
import styles from './index.less';

const Team: React.FC = () => {
  return (
    <div className={styles.team}>
      <div className={styles.title}>About the Team</div>
      <div className={styles.content}>
        The PeopleEquity team is composed of experts from various fields such as
        mathematics, physics, philosophy, cryptography and more from all over
        the world. We are dedicated to exploring the feasibility of various
        landing plans that promote social progress through technological
        advancement. In recent decades, internet companies have driven rapid
        global development, with a total market value of hundreds of trillions
        of dollars in 2021. However, due to the unjust value distribution, this
        part of market value (equity) is concentrated in the hands of the few,
        i.e. founders, VC, senior management, while ordinary people who conduct
        online activities and generate data hold limited equity in these
        companies. This has formed a huge wealth gap. In early 2021, the founder
        of PeopleEquity proposed the core plan: to revamp the existing
        production relations with blockchain technology, distribute labor income
        and market value (equity) income through smart contracts, achieve a more
        equitable wealth distribution model, and enable users and workers to
        obtain their rightful labor income and market value (equity) income. The
        new yet more inclusive production relationships will further foster the
        economic prosperity, reducing social wealth gap, and as a result raising
        the upper limit of social development. After going through major
        revisions, the core plan was launched with PeopleEquity and related eco
        projects in mid-2021.
      </div>
      <div className={styles.title + ' pt-[.5rem] pb-[.5rem]'}>Roadmap</div>
      <div className={styles.roadmap + ' pb-[.6rem]'}>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2021.8</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>启动项目</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2021.8</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              完成新的web3生产关系1.0理论构建：用户获得本该属于自己的劳动收入和股权收入
            </li>
            <li>发行测试通证1.0测试新的生产关系</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2021.11</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>完成去中心化信用体系1.0理论构建：适用于投资；</li>
            <li>发行测试通证2.0测试生产关系和去中心化信用体系</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2021.12</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              推出大数据中心1.0———去中心化信用平台，实现去中心化信用的可视化
            </li>
            <li>
              完成新的web3生产关系2.0理论构建：将新的生产关系适用范围推广至所有类型通证（通过去中心化交易所保障，不管通证是否设置手续费都可以实现）
            </li>
            <li>完成去中心化信用体系2.0理论构建：适用范围推广至所有类型通证</li>
            <li>
              根据去中心化信用体系2.0.设计全新的共识机制PoSA(PoSA可以验证节点过去某段时间完成的具体工作，还能在一定程度上反应工作的社会认可程度。实现不同的节点可以从事社会中各行各业的不同工作来获取算力，不断为社会创造价值并获得收益)
            </li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.1</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>推出生产关系协议栈VIIP和VSDP（适用于投资）</li>
            <li>升级生产关系协议栈VIIP和VSDP以抵御三明治攻击</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.3</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>推出符合web3生产关系2.0的去中心化交易所EquitySwap1.0</li>
            <li>推出大数据中心2.0——去中心化信用平台，兼容无手续费的通证</li>
            <li>发行测试通证3.0测试生产关系和去中心化信用体系</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.4</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              吸收高性能公链的亮点，基于PoSA共识机制设计符合VIIP和VSDP协议栈并支持多链异构和动态分片的新公链
            </li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.5</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              推出去中心化交易所EquitySwap2.0，基于不同量级的企业的去中心化上市特征，提炼优化对应的数学模型，改进参数，推出三个不同的去中心化交易所（类似美国交易所，纳斯达克交易所，纽约交易所），让不同量级的企业在不同的去中心化交易所上拥有无上限的发展空间，完成去中心化上市相应理论
            </li>
            <li>发行测试通证4.0测试生产关系和去中心化信用体系</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.6</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              完成密文密码钱包设计。和多签钱包及多方计算钱包相比，密文密码钱包实现个人无需助记词掌控私钥
            </li>
            <li>
              完成新的web3生产关系3.0理论构建：适用范围推广至生产生活等各方面
            </li>
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.6</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              完成密文密码钱包设计。和多签钱包及多方计算钱包相比，密文密码钱包实现个人无需助记词掌控私钥
            </li>
            <li>
              完成新的web3生产关系3.0理论构建：适用范围推广至生产生活等各方面
            </li>
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.7</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>推出大数据中心3.0——去中心化信用平台，兼容商业</li>
            <li>
              实现了ESChain中基于PoSA+BFT的核心共识模块，
              基于BFT在容忍了作恶节点的同时，提升了共识效率。PoSA弱化了POS的中心化属性的同时，兼顾了参与者的经济活动，使得更加去中心化
            </li>
            <li>公链启动开发</li>
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.9</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>完成生产关系协议栈升级，推出适用于产品的PEC</li>
            <li>发行测试通证5.0测试生产关系和去中心化信用体系</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2022.12</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              推出集成密文密码钱包、去中心化信用体系和基于新的生产关系的社区管理功能的新一代钱包。
            </li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2023.1</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              推出去中心化交易所EquitySwap3.0，对三个交易所进行了三合一升级，优化了用户端的操作，并将三个交易所分别命名为——Whale，Elephant，Ant
            </li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2023.2</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              优化EquitySwap3.0 将Ant
              运算gas降低为原来的十分之一，将交易最的小额度由原来的1/1014提高到14个数量级到1/1026
            </li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2023.3</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>去中心化钱包优化基于新的生产关系的社区管理功能</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2023.4</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>BSC和ARB上线EquitySwap</li>
            <li>成立PeopleEquity生态基金</li>
          </ul>
        </div>
        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2023.6</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              上线ESChain测试网，开启空投活动，ESChain早期tps150K后期实现动态分片后tps达百万级。
            </li>
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2023.8</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>上ESChain线主网</li>
            <li>主网域名服务ENS(ESChain Name Service)</li>
          </ul>
        </div>

        <div className={styles.roadmapItem}>
          <div className={styles.roadmapTime}>2024.6</div>
          <div className={styles.roadmapLine}></div>
          <ul className={styles.roadmapContent}>
            <li>
              升级ESChain
              2.0版本，重构整条公链，支持动态分片，以承载各场景生态应用指数级的上链需求(tps达百万级)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
